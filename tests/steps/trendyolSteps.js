const {Given, When, Then }  = require ("@cucumber/cucumber");
const {chromium} = require('@playwright/test')
const { expect } = require('@playwright/test');
const fs = require("fs");
const { faker, AnimalModule } = require('@faker-js/faker');

let browser;
let page;

const config = JSON.parse(fs.readFileSync("datas.json"));

Given('Kullanici {string} adresine gider', async function (urlParam) {
    browser = await chromium.launch({headless : false});
    page = await browser.newPage();

    // JSON dosyasındaki URL'yi kullan
    const url = config[urlParam];

    if (!url) {
        throw new Error(`"${urlParam}" için bir URL bulunamadı!`);
    }

    await page.goto(url);
    this.page = page;    

    console.log("SUCCESSFUL! Message: ")
  });  

When('Kullanici varsa {string} objesine tiklar', async function (string) {
    const locator = config[string];

    try {
        const modalCloseButton = page.locator(locator);
        if (await modalCloseButton.isVisible()) {
            await modalCloseButton.click();
        }
    } catch (error) {
        console.log("Modal close butonu bulunamadı, devam ediliyor");
    }
  
})

When('Kullanici {string} objesine tiklar', async function (string) {
    const locator = config[string];
    await page.click(locator);    
  
})

When('Kullanici {string} ilk objesine tiklar', async function (string) {
    const locator = config[string];
    if (!locator) {
        throw new Error(`"${string}" için bir locator bulunamadı!`);
    }
    
    // Elementin görünür olmasını bekle ve sonra tıkla
    const element = page.locator(locator).first();
    await element.waitFor({ state: 'visible' });
    await element.click();    
  
})

When('Kullanici sayfanin yuklenmesini bekler', async function () {
    
     await page.waitForLoadState();
})

When('Kullanici acilan yeni sekmeye odaklanir', async function () {
    // Yeni sekmenin açılmasını bekle ve referansını al
    const newPage = await page.waitForEvent('popup');
    // Global page değişkenini güncelle
    page = newPage;
    // Yeni sayfanın yüklenmesini bekle
    await page.waitForLoadState();
})

When('Kullanici {string} saniye bekler', async function(saniye) {
    // String'i number'a çeviriyoruz
    const beklemeZamani = parseInt(saniye) * 1000; // saniyeyi milisaniyeye çeviriyoruz
    
    // Playwright'in page.waitForTimeout metodunu kullanarak bekleme işlemini gerçekleştiriyoruz
    await page.waitForTimeout(beklemeZamani);
});
When('Kullanici {string} ikinci objesine tiklar', async function (string) {
    const locator = config[string];
    if (!locator) {
        throw new Error(`"${string}" için bir locator bulunamadı!`);
    }
    
    // Elementin görünür olmasını bekle ve sonra tıkla
    const element = page.locator(locator).nth(1); // .first() yerine .nth(1) kullanıyoruz
    await element.waitFor({ state: 'visible' });
    await element.click();  
})
Then('Kullanici eski sekmeye doner', async function() {
    // Tüm açık sekmeleri al
    const pages = await browser.pages();
    
    // İlk sekmeye geç (ana sekme)
    await pages[0].bringToFront();
});
When('Kullanici {string} adresiine gider', async function (urlParam) {
    // JSON dosyasındaki URL'yi kullan
    const url = config[urlParam];

    if (!url) {
        throw new Error(`"${urlParam}" için bir URL bulunamadı!`);
    }

    await page.goto(url);
    this.page = page;    
  });
  Then('Kullanici {string} objesinin degerinin {string} oldugunu dogrular', async function(element, expectedText) {
     // Locator'ı al
     const elementLocator = config[element];        
     const elementHandle = await page.locator(elementLocator);
     await expect(elementHandle).toHaveText(expectedText);
});
When('Kullanici {string} objesinin degerininin {string} objesinin degerine esit oldugunu dogrular', async function (urunFiyatiLocator, toplamTutarLocator) {
    // Locator'ları config'den al
    const urunFiyatiSelector = config[urunFiyatiLocator];
    const toplamTutarSelector = config[toplamTutarLocator];
    // Elementlerin değerlerini al
    const urunFiyati = await page.locator(urunFiyatiSelector).textContent();
    const toplamTutar = await page.locator(toplamTutarSelector).textContent();
    // Değerleri temizle (sadece sayısal değerleri al)
    const temizUrunFiyati = urunFiyati.replace(/[^0-9,]/g, '');
    const temizToplamTutar = toplamTutar.replace('Toplam', '').replace(/[^0-9,]/g, '').trim();
    // Değerleri karşılaştır
    expect(temizUrunFiyati).toBe(temizToplamTutar);
});

When('Kullanici {string} objesini dummy email ile doldurur', async function (inputLocator) {
    const emailField = config[inputLocator];
    const fakeEmail = faker.internet.email();

    await page.locator(emailField).fill(fakeEmail);

})
When('Kullanici {string} objesini dummy ad ile doldurur', async function (inputLocator) {
    const nameField = config[inputLocator];
    const fakeName = faker.person.firstName();

    await page.locator(nameField).fill(fakeName);

})
When('Kullanici {string} objesini dummy soyad ile doldurur', async function (inputLocator) {
    const surNameField = config[inputLocator];
    const fakesurName = faker.person.lastName();

    await page.locator(surNameField).fill(fakesurName);

})
When('Kullanici {string} objesini dummy phone ile doldurur', async function (inputLocator) {
    const phoneField = config[inputLocator];
    const fakePhone =  "555" + faker.number.int({ min: 2364949, max: 9954545 });
    await page.locator(phoneField).fill(fakePhone);

})
When('Kullanici {string} objesinden rasgele bir il secenege tiklar', async function (locatorKey) {
    // XPath ile tüm seçeneklerini bul
    const a = config[locatorKey];
    const options = await page.$$(a);
    
    // Eğer seçenek yoksa hata fırlat
    if (options.length === 0) {
        throw new Error(`secenekler bulunamadı: ${locatorKey}`);
    }

    // Rastgele bir index seç
    const randomIndex = Math.floor(Math.random() * 80) + 1; // 1 ile 81 arasında
    
    // Seçilen elemente tıkla
    await options[randomIndex].click();
});
When('Kullanici {string} objesinden rasgele bir ilce secenege tiklar', async function (locatorKey) {
    // XPath ile tüm seçeneklerini bul
    const a = config[locatorKey];
    const options = await page.$$(a);
    
    // Eğer seçenek yoksa hata fırlat
    if (options.length === 0) {
        throw new Error(`secenekler bulunamadı: ${locatorKey}`);
    }

    // Rastgele bir index seç
    const randomIndex = Math.floor(Math.random() * (86 - 81 + 1)) + 81; // 81-86 arasında rastgele sayı üret
    
    // Seçilen elemente tıkla
    await options[randomIndex].click();
});
When('Kullanici {string} objesinden rasgele bir mahalle secenege tiklar', async function (locatorKey) {
    // XPath ile tüm seçeneklerini bul
    const a = config[locatorKey];
    const options = await page.$$(a);
    
    // Eğer seçenek yoksa hata fırlat
    if (options.length === 0) {
        throw new Error(`secenekler bulunamadı: ${locatorKey}`);
    }
    const lastOption = options[options.length - 1];

    await lastOption.click();
});

When('Kullanici {string} objesini dummy adres ile doldurur', async function (inputLocator) {
    const addressField = config[inputLocator];
    const fakeAddress =  faker.location.county() + "Mahallesi " + faker.location.streetAddress() + "Sokak";
    await page.locator(addressField).fill(fakeAddress);

})

When('Kullanici {string} objesini dummy adres basligi ile doldurur', async function (inputLocator) {
    const addressTitleField = config[inputLocator];
    const fakeAddressTitle =  faker.location.countryCode()  + " Adresi";
    await page.locator(addressTitleField).fill(fakeAddressTitle);

})
When('Kullanici tarayiciyi kapatir', async function () {
    await browser.close();
})