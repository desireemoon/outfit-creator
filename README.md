# outfit-creator
outfit-creator

# Project Overview


## Project Description

Responsive app that catalogues CRUD clothing items and allows you to CRUD outfits.

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

Outfit table:
- Outfit_id (PK)
- Name
- Clothing_id (FK)
```

### MVP/PostMVP - 5min

MVP:
- database container multiple clothing tables (based on category) and outfit table (hold clothing IDs for associations)
- Show a list of each clothing category 
- Allow user to CRUD outfits
- Allow user to CRUD clothing articles
- be responsive
- 

#### PostMVP EXAMPLE

- Random Outfit from list button
- Random Outfit Creator

## ERD Diagram

- https://res.cloudinary.com/dz6rzbi7d/image/upload/v1571455417/Project3/IMG_1799_quu72q.heic

## React Component Hierarchy

https://res.cloudinary.com/dz6rzbi7d/image/upload/v1571455471/Project3/IMG_1800_vvyapp.heic

## Priority Matrix

https://res.cloudinary.com/dsnhxcw0e/image/upload/v1571612261/Screen_Shot_2019-10-19_at_4.58.54_PM_vcddxf.heic

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
| Create DB (models, migration, seed) | H | 2hrs| :---: | :---: |
| Setting up express router | H | 2hrs| :---: | :---: |
| Create-react-app (set-up skeleton) | H | 1/2hrs | :---: | :---: |
| Set up routes | H | 1hrs| :---: | :---: |
| Build Main | H | 1hrs| :---: | :---: |
| Build ClothingList/OutfitList | H | 2hrs| :---: | :---: |
| Build CreateClothing | H | 1hrs| :---: | :---: |
| Build CreateOutfit | H | 1hrs| :---: | :---: |
| Build ClothingContainer | H | 2hrs| :---: | :---: |
| Build OutfitContainer | H | 2hrs| :---: | :---: |
| Build NotFound/ Footer | H | 1/2hrs| :---: | :---: |
| Build Header/Navbar | H | 2hrs| :---: | :---: |
| Make successful API calls | H | 2hrs| :---: | :---: |
| Plan out designs | M | 2hrs| :---: | :---: |
| Style home page | M | 2hrs| :---: | :---: |
| Style create outfit page | M | 2hrs| :---: | :---: |
| Style create clothing page | M | 2hrs| :---: | :---: |
| Style clothing list, outfit list pages | M | 2hrs| :---: | :---: |
| Make desktop responsive | M | 2hrs| :---: | :---: |
| Time spent on Git merge | M | 1hr| :---: | :---: |
| PMVP: build and style random outfit page | M | 4hrs| :---: | :---: |
| Total | H | 35hrs| :---: | :---: |

## Additional Libraries
- react-router
- react-router-dom
- @fortawesome/fontawesome-svg-core
- @fortawesome/free-brands-svg-icons
- @fortawesome/free-solid-svg-icons


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
