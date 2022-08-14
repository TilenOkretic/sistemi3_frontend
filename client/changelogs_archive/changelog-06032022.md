## Changelog_06032022

- finished with conigFinish for now, still needs twaking and polishing

- implemented return to model selection
  
  - needed to use location.reload

- removevd empty files from *old/* directory
  
  - the files that were imported from v2 to v3

- renamed some of the **scss** files with the **"__"** naming convention
  
  - files that are imported into the **main.scss**  now have the **__** prefix
  
  - moved **variables, utility, animations** files into **abstracts** subfolder 
  
  - splited utility into multiple classes , moved said classes into **utility/** subfolder

- implemented:
  
  - **isCockpitStandard**
  
  - **isCockpitPassenger**
  
  - **isCockpitCentral**
  
  - **isCockpitSide**

- archiveChangelog script

- All changelogs are available at:  https://github.com/TilenOkretic/boat_configurator/tree/3.0-webpack/changelogs