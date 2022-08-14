
# How to BUILD  <-v3->

* Building files:
  * Method 1: 
    * run the **npm build** script  
  * Method 2:
    * In VS code press **ctrl+shift+b** to run **the build task**
* Pushing to production:
  * run the **./publish** script
    * it will copy the **currentChangelog.md** to the archive and into the **./build/** direcotry
    * after it will push the files inside **./build/** to the production repo branch **v3** 
* Build files are located in **./build/** direcotry and also ```https://github.com/TilenOkretic/boat_configurator_production``` repository

---
# TODO
- [ ] when switching from passenger layout to lounge layout show deck table (normal) 
- [ ] clear table lounge layout selection and show deck table (normal) selection
- [ ] implement cushioning update for deck table lounge layout

--- 

# Running a DEV server

* Make sure you have NodeJS and NPM(node package manager) installed
* Run the **npm dev** script
* NOTE: Don't forget to run **npm install** because there is a high risk of missing **node_modules** 

---

# Using

* REST countries: https://restcountries.com/