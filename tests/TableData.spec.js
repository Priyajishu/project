import {test , expect} from "playwright/test"
test("Handling Datepicker 1" , async ({page})=>{
    //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //count of table columns
    let tableColumns = await page.$$('[id="productTable"] thead tr th')
    console.log(tableColumns.length)

    //Count of rows
    let tableRows = await page.locator('[id="productTable"] tbody tr')
    console.log(await tableRows.count())

    //1 Select a Product
    const selectData = await tableRows.filter({
        has : page.locator('td'),
        hasText : "Tablet"
    })

    await selectedData.locator('input').click()
    await page.waitForTimeout(3000)


    //Multiple Products
    async function multiProduct(prodName){
        const selectedData = await tableRows.filter({
            has : page.locator('td'),
            hasText : prodName
        })

        await selectedData.locator('input').click()
    }

    await multiProduct("Smartphone")
    await multiProduct("Wireless Earbuds")
    await page.waitForTimeout(3000)


    //3 Read the page one datas

    for(let i=0 ; i < await tableRows.count() ; i++){     //Row based

        let tds = await tableRows.nth(i).locator('td')
        //console.log(await tds.allInnerTexts())

        for (let k=0 ; k < await tds.count() ; k++){      //column based
            let text = await tds.nth(k).textContent()
            console.log(await text)
        }
    }

    //4 Read all pages
    const pages = await page.locator('[id="pagination"]>li>a')
    console.log(await pages.count())

    for(let j=0 ; j < await pages.count() ; j++){

        if(j > 0){
            await pages.nth(j).click()
        }
    let products = await page.$$('[id="productTable"] tbody tr')

    for (const element of products){
        let text = await element.textContent()
        console.log(await text.trim())
    }
    }
    
})