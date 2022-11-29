import { nitric } from "../package.json"

if (nitric.includes("-rc")) {
    throw new Error("nitric must be set to a production version!");
}