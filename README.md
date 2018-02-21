# react-selection-tree
efficient fast scalable multiple nested selectable tree with search functionality 
## Features
Support infinite scroll only render what in view port.
Support infinite nested tree
Support search
Support multiple select or single select

## Installation
Independent library
`npm install react-selection-tree`

## Usage
##### Data structure
```json
{
    id: 1,
    name: 'Location 1',
    parentId: null,
    children: {
        2: {
            id: 2,
            parentId: 1,
            name: 'Location 2',
            children: {
                4: {
                    id: 4,
                    parentId: 2,
                    name: 'Location 4',
                    children: null
                }
            }
        },
        3: {
            id: 3,
            parentId: 1,
            name: 'Location 3',
            children: null
        }
    }
}
```

import and paste the code below 

```javascript
<ReactSelectionTree
    name="Location"
    data={{ "children": { "4000": { "children": { "4001": { "children": { "4010": { "name": "Level 1", "id": 4010, "type": "Reference", "parentId": 4001 }, "4011": { "name": "Level 2", "id": 4011, "type": "Reference", "parentId": 4001 }, "4012": { "name": "Level 3", "id": 4012, "type": "Reference", "parentId": 4001 }, "4013": { "name": "Level 4", "id": 4013, "type": "Reference", "parentId": 4001 }, "4014": { "name": "Getting Things Done", "id": 4014, "type": "Reference", "parentId": 4001 } }, "name": "Access", "id": 4001, "type": "Reference", "parentId": 4000 }, "4002": { "children": { "4015": { "children": { "4016": { "name": "Helps Me Understand", "id": 4016, "type": "Reference", "parentId": 4015 }, "4017": { "name": "Listens & Answers Questions", "id": 4017, "type": "Reference", "parentId": 4015 }, "4018": { "name": "Time Spent", "id": 4018, "type": "Reference", "parentId": 4015 }, "4019": { "name": "Polite", "id": 4019, "type": "Reference", "parentId": 4015 }, "4020": { "name": "Knowledge & Skill", "id": 4020, "type": "Reference", "parentId": 4015 } }, "name": "Physician", "id": 4015, "type": "Reference", "parentId": 4002 }, "4021": { "children": { "4022": { "name": "Staff", "id": 4022, "type": "Reference", "parentId": 4021 }, "4023": { "name": "Technologist", "id": 4023, "type": "Reference", "parentId": 4021 } }, "name": "Staff 2", "id": 4021, "type": "Reference", "parentId": 4002 }, "4024": { "name": "Materials (Brochures, Information, Reports, etc.)", "id": 4024, "type": "Reference", "parentId": 4002 }, "4025": { "name": "Follow Up", "id": 4025, "type": "Reference", "parentId": 4002 } }, "name": "Communication", "id": 4002, "type": "Reference", "parentId": 4000 }, "4003": { "children": { "4026": { "children": { "4027": { "name": "Noise", "id": 4027, "type": "Reference", "parentId": 4026 }, "4028": { "name": "Lighting", "id": 4028, "type": "Reference", "parentId": 4026 }, "4029": { "name": "Cleanliness", "id": 4029, "type": "Reference", "parentId": 4026 }, "4030": { "name": "Comfort", "id": 4030, "type": "Reference", "parentId": 4026 }, "4031": { "name": "Temperature", "id": 4031, "type": "Reference", "parentId": 4026 } }, "name": "Facilities", "id": 4026, "type": "Reference", "parentId": 4003 }, "4032": { "children": { "4033": { "name": "Scheduling Staff", "id": 4033, "type": "Reference", "parentId": 4032 }, "4034": { "name": "Front-Desk", "id": 4034, "type": "Reference", "parentId": 4032 } }, "name": "Office", "id": 4032, "type": "Reference", "parentId": 4003 }, "4035": { "name": "Billing", "id": 4035, "type": "Reference", "parentId": 4003 }, "4036": { "name": "Registration", "id": 4036, "type": "Reference", "parentId": 4003 } }, "name": "Office", "id": 4003, "type": "Reference", "parentId": 4000 }, "4004": { "children": { "4037": { "name": "Quantity", "id": 4037, "type": "Reference", "parentId": 4004 }, "4038": { "name": "Quality", "id": 4038, "type": "Reference", "parentId": 4004 } }, "name": "Outcome", "id": 4004, "type": "Reference", "parentId": 4000 }, "4005": { "children": { "4039": { "name": "Recommend", "id": 4039, "type": "Reference", "parentId": 4005 }, "4040": { "name": "Come Back", "id": 4040, "type": "Reference", "parentId": 4005 } }, "name": "Loyalty", "id": 4005, "type": "Reference", "parentId": 4000 } }, "name": "Satisfaction", "id": 4000, "type": "Reference", "parentId": 0 } }, "name": "Category", "parentId": null }}
    breadcrumClick={(data) => {}}
    check={(data) => {}}
    search={(data) => {}}
    reset={(data) => {}}
    uncheckAll={(data) => {}}
    showSearch
    showClearAll
    infinite
    multipleSelect
  />
```
### Technical Chellenge
Initially I used recursion and this was the biggest mistake since js doesnt support tail optimization. When the data becomes too big with many nested level of data. The browser actually will crash. 

Solved by:
#### -> Instead of using recursion, use iteration. 
#### -> To reference node faster, instead of doing a binary search the entire tree, we use hash map with key as id of the node 
#### -> When update state, instead of creating a new version of the data we use the hashmap to update ( since in js object is referenced not copied ) 

I know this is against data mutation best practice but for performance we must mutate all the way. 

