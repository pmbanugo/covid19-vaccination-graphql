import { get } from "https";
import parse from "csv-parse";
import { finished } from "stream/promises";

const csvURL =
  process.env.CSV_URL ||
  "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv";

const parseOption = {
  columns: true,
  skip_empty_lines: true,
  skip_lines_with_error: true,
};

export default function () {
  return new Promise(function (resolve, reject) {
    get(csvURL, async (res) => {
      const { statusCode } = res;
      if (statusCode !== 200) {
        // Consume response data to free up memory
        res.resume();
        reject(
          new Error(
            "Request Failed while retrieving csv file from resource.\n" +
              `Status Code: ${statusCode}`
          )
        );
      }

      const parser = parse(parseOption);
      const records = [];
      // Use the readable stream api
      parser.on("readable", () => {
        let record;
        while ((record = parser.read())) {
          records.push(record);
        }
      });
      parser.on("error", function (err) {
        console.error("Parsing error: ", err.message);
        reject(err);
      });
      // Catch lines with invalid data. This will be caught because skip_lines_with_error is set to true
      parser.on("skip", function (err) {
        console.error(err.message);
      });

      res.pipe(parser);
      await finished(parser);
      resolve(records);
    }).on("error", (e) => {
      console.error(`HTTP request failed: ${e.message}`);
      reject(e);
    });
  });
}
