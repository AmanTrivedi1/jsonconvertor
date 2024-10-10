import { NextRequest } from "next/server";
import { z } from "zod";

const determineSchemaType = (schema: any): string => {
  if (!schema.hasOwnProperty("type")) {
    if (Array.isArray(schema)) {
      return "array"
    } else {
      return typeof schema
    }
  }
  return schema.type
}

const jsonSchemaTodo = (schema: unknown) => {
  const type = determineSchemaType(schema);

  switch (type) {
    case "string":
      return z.string().nullable();

    case "number":
      return z.number().nullable();
  }
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  //Validation of comming data
  const genericSchema = z.object({
    data: z.string(),
    format: z.object({}).passthrough(),
  });

  const { data, format } = genericSchema.parse(body);

  const dynamicSchema = jsonSchemaTodo(format);

  return new Response("OK");
};
