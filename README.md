made a direcotry with cypress project name ,
initialized npm init which installed package.json and other npm requirements ,
installed cypress via command   ,
opened in vscode and added testcase for login and navigation in it  ,
write command " npx cypress open " to run from root    ,
It will open browser and ask for choice of browser , i selected edge browser    ,
it opened e2e directory and loaded files of login and navigation test and when click it executes and shows errors or pass testcase

Task #2
used before each before runing , like checked either user is already logged in instead of repeatedly login  , 
used assertion like inventory list  should be visible ,
Negative assertion like login button should not exist after login ,
Reusability focused more
