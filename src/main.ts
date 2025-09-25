// Could not find a declaration file for module 'bare-name'.
// 'xxx/include/TreeView.js' implicitly has an 'any' type.ts(7016)
// Typescript does not search for the `.d.ts` file
import { TreeView as _bareName } from "bare-name";
import * as _bareName2 from "bare-name";

// This works. Typescript finds `.d.ts`
import { TreeView as _dirName } from "dir-name/TreeView.js";
import * as _dirName2 from "dir-name/TreeView.js";
