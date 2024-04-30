import { SOCIAL_API } from "../index"
import { OpenAPISchemaValidator } from "express-openapi-validator/dist/framework/openapi.schema.validator"

// This test is different to redocly lint
describe("Validate OAS (Express integration)", () => {
  const validator = new OpenAPISchemaValidator({ version: "3", validateApiSpec: true })

  it("Social service: should not be errors when validating API with schema validator", () => {
    const result = validator.validate(SOCIAL_API)
    expect(result.errors!.length).toBe(0)
  })
})
