# outfit-creator
outfit-creator

# Project Overview


## Project Description

Responsive app that catalogues CRUD clothing items and allows you to CRUD outfits.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Oct 21st| Project Approval - Pseudocode and start Structure and backend | Incomplete
|Oct 22nd| Finish structure and start Logic  | Incomplete
|Oct 23rd| Finish logic and start CSS | Incomplete
|Oct 24th| CSS and any post MVP work | Incomplete
|Oct 25th| Presentation Day - project finished  | Incomplete

## Wireframes

https://www.figma.com/file/BQLbVHUzP7E7Whu0gC0SMd/Wireframing-Copy?node-id=89364%3A480.

## API Snippet

```
Clothing tables (Shirt, pants, shoes, etc..):
- Clothing_id (PK)
- Name
- Type
- Brand
- Color 
- Fabric
- isDirty

Outfit table:
- Outfit_id (PK)
- Name
- Clothing_id (FK)
```

### MVP/PostMVP - 5min

MVP:
- database containing multiple clothing tables (based on category) and outfit table (hold clothing IDs for associations)
- Show a list of each clothing category 
- Allow user to CRUD outfits
- Allow user to CRUD clothing articles
- be responsive

#### PostMVP EXAMPLE

- Random Outfit button
- Random Outfit Creator

## ERD Diagram

- https://res.cloudinary.com/dz6rzbi7d/image/upload/v1571455417/Project3/IMG_1799_quu72q.heic

## React Component Hierarchy

- https://res.cloudinary.com/dz6rzbi7d/image/upload/v1571455471/Project3/IMG_1800_vvyapp.heic

## Priority Matrix

- https://res.cloudinary.com/dsnhxcw0e/image/upload/v1571612261/Screen_Shot_2019-10-19_at_4.58.54_PM_vcddxf.heic

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the footer  | 
| App | This will hold the Header, Main, and Footer. Router will wrap Header and Main here. |
| Main | This will hold the rest of the components - will hold state |
| Home | Homepage for the site|
| ClothingList | Hold list of all clothing items |
| OutfitList | Hold list of all outfits |
| CreateClothing | Where the user will be able to create new items and add them to the clothing tables |
| CreatOutfit | Where the user will be able to create outfits and add them to the outfit table |
| ClothingContainer | Where the clothing information will render |
| OutfitContainer | Where the outfit information will render |
| NotFound | Redirect if user |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Design | H | 3hrs| 6hrs | :---: |
| Pseudocode | M | 3hrs| 10hrs | :---: |
| Create DB (models, migration, seed) | H | 3hrs | :---: | :---: |
| Create rest of backend including routes | H | 3hrs| :---: | :---: |
| REACT structure | H | 6hrs| :---: | :---: |
| React routing and links | H | 1hrs| :---: | :---: |
| Build Main | H | 1hrs| :---: | :---: |
| Build ClothingList/OutfitList | H | 2hrs| :---: | :---: |
| Build OutfitList | H | 2hrs| :---: | :---: |
| Build CreateClothing | H | 1hrs| :---: | :---: |
| Build CreateOutfit | H | 1hrs| :---: | :---: |
| Build ClothingContainer | H | 2hrs| :---: | :---: |
| Build OutfitContainer | H | 2hrs| :---: | :---: |
| Build NotFound/Footer | H | 1/2hrs| :---: | :---: |
| Build Header/Navbar | H | 2hrs| :---: | :---: |
| React logic and API calls | H | 6hrs| :---: | :---: |
| Plan out designs | M | 2hrs| :---: | :---: |
| CSS styling | M | 10hrs| 10hrs | :---: |
| PMVP: build and style random outfit page | M | 4hrs| :---: | :---: |
| Total | H | 34hrs| 35hrs | :---: |

## Additional Libraries
- react-router
- axios
- sequelize
- react-router-dom
- @fortawesome/fontawesome-svg-core
- @fortawesome/free-brands-svg-icons
- @fortawesome/free-solid-svg-icons


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```

```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
