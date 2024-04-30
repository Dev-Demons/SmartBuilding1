import { readFileSync } from "fs"
import { resolve } from "path"
import { parse } from "yaml"

const parseAPI = (fileName: string): any => {
  const file = readFileSync(resolve(__dirname, "..", "openapi", fileName), "utf8")
  return parse(file)
}

export const SOCIAL_API = parseAPI("social.yaml")
