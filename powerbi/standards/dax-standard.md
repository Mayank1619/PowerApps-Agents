# DAX Standard

Status: proposed; results must be tested in a verified engine before release.

- Prefer explicit measures and trace each one to an approved business definition.
- Format expressions consistently; use descriptive variables to clarify intermediate logic.
- Use safe division and define behavior for zero denominators, blank inputs, missing dimensions, and empty filter context.
- Document row/filter context, date context, inclusions, exclusions, numerator, denominator, owner, and expected result examples.
- Avoid unnecessary iterators, repeated expensive expressions, and calculated columns when a measure or source transformation is appropriate.
- Review cardinality, filter propagation, storage mode, and expected evaluation cost in the actual model.
- Test positive, negative, blank, zero-denominator, boundary-date, multi-filter, and total/subtotal cases.
- Do not use a measure unless the model contains it. Do not present an unverified measure as a business fact.
