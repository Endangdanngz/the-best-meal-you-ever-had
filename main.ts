// The Best Meal You Ever Had — make.fun entry
// Writes one fixed line (a single sentence) to output/entry.txt and echoes it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My grandmother's beef rendang, eaten with my hands on her porch in Padang while the rain hammered the tin roof, tasted like the whole of childhood forgiving me.";

const outPath = "output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(LINE);
