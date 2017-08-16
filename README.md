# Component and feature Evaluation
A short evaluation on how to implement current Songs features in Angular 2

### Considerations 

#### Table Component
- customizable rows
- customizable cells
- customizable headers

Went through 4 table components:
* **ng2-table** https://github.com/valor-software/ng2-table
  * Small codebase; easy to extend
  * Straight forward usage
  * Simple data mapping for cells
  * Few features, needs extending
  * Bad documentation
A good solution to construct upon. Few features but easy to implement new ones.


* **ngx-datatable** https://github.com/swimlane/ngx-datatable
  * Very fast
  * Many features
  * Has template based cell and header customization
  * Selection functionality
  * Buggy
  * Uses div layout
  * Large codebase; hard to extend
  * No way to do row customization
  A buggy performance optimized table with a lot of configuration. Many features but harder to extend.


* **ag-grid** https://github.com/ag-grid/ag-grid
  * Good documentation
  * Lots of features
  * Huge codebase; hard to extend
  * Needs enterprise license for support 
  * No way of row customization
  * Uses div layout
  Similar to ngx-datatable, a lot features and very hard to extend. More appropriate  to an excel like app


* **ng2-smart-table** https://github.com/akveo/ng2-smart-table
  * Similar to Ng2-table 
  * Features inline editing
  Similar to ng2-table but has a feature we won’t be using: inline editing. 


#### Drag and Drop Component
- transfer data to dropzone
- customizable drag image

Went through 3 dnd components:
* **ng2-dnd** https://github.com/akserg/ng2-dnd
  * Easy to setup
  * Small codebase; easy to extend and fix
  *  Bad documentation
  * Needed to fix drag image implementation
  * Bad documentation

* **ng2-drag-and-drop** https://github.com/ObaidUrRehman/ng2-drag-drop
  * Similar to ng2-dnd
  * Good documentation
  * Awful performance; a lot of processing on non reacting mouse move event 

* **ng2-dragula** https://github.com/valor-software/ng2-dragula
  * Different use case; used for swapping items between lists


#### Dropdown
#### Tabs
#### Pagination
#### Accordion
Will use boostrap for these 3

#### Directory Tree Component
* customizable actions
* **angular-tree-component** https://github.com/500tech/angular-tree-component
  * the perfect solution; good documentation and good templating features covers all the needs.


#### Knockout support
* bidirectional communication
Integration is straight forward. Components need to execute ko.applyBindings when they finish rendering.

#### Server-side rendering

### Installation

The project [Node.js](https://nodejs.org/) v8+ to run.
```sh
$ cd dnd-table-eval
$ npm install
$ npm start
```
