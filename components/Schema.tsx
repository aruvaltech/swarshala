interface SchemaProps {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Component to render JSON-LD schema markup
 * Usage: <Schema schema={generateOrganizationSchema()} />
 */
export function Schema({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}

/**
 * Component to render multiple schemas
 */
interface MultiSchemaProps {
  schemas: Array<Record<string, unknown>>;
}

export function MultiSchema({ schemas }: MultiSchemaProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}
    </>
  );
}
