import { parse } from 'acorn'
import { writeFileSync } from 'fs'
import {inspect} from 'util'

const code = `var value = null;

class C {
  static {
    value = new.target;
  }
}
`

let ast = parse(code, {ecmaVersion: 'latest', locations: true, ranges: true})

writeFileSync('./ast.txt', inspect(ast, {depth: 100}))
