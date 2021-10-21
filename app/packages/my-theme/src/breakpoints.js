import { createBreakpoints } from "@chakra-ui/theme-tools"
// This is the default breakpoint
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})
// Internally, we transform to this

export default breakpoints;