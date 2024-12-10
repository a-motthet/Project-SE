*** Settings *** 
Library    SeleniumLibrary
Library    Collections

*** Variables *** 
${BASE_URL}            http://localhost:3000/

*** Test Cases *** 
Register
    Open Browser    ${BASE_URL}    edge
    Click Element    //*[@id="root"]/div/div/div/div[2]/div/form/div[5]/div/button
    Input Text    //*[@id="Firstname"]    Ratiya
    Input Text    //*[@id="Lastname"]    Phatitin
    Input Text    //*[@id="username"]    RatiyaPhatitin
    Input Text    //*[@id="phone"]    0643160042
    Input Text    //*[@id="email"]    ratiyaphatitin@gmail.com
    Input Text    //*[@id="password"]    Ratiya19!
    Input Text    //*[@id="confirm-password"]    Ratiya19!
    Click Element    //*[@id="root"]/div/div/div/div[2]/div/form/div[7]/button
Login
    Open Browser    ${BASE_URL}    edge
    Input Text    //*[@id="username"]    RatiyaPhatitin
    Sleep    5s
    Input Text    //*[@id="password"]    Ratiya19!
    Sleep    5s
    Click Element    //*[@id="root"]/div/div/div/div[2]/div/form/div[4]/button
    
