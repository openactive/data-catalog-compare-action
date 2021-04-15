# data-catalog-compare-action
GitHub Action to compare data catalog files

## Inputs

### `new_json_file`

**Required** New JSON-LD Data Catalog file path.

### `old_json_file`

**Required** Old JSON-LD Data Catalog file path.

## Outputs

### `url`

URL of newly added dataset

## Example usage

uses: openactive/data-catalog-compare-action@main
with:
  new_json_file: './a.json'
  old_json_file: './b.json'
  