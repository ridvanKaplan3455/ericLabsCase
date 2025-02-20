Feature: Trendyol Test Feature

Scenario: Trendyol Test Scenario
Given Kullanici "trendyolURL" adresine gider
And Kullanici sayfanin yuklenmesini bekler
When Kullanici varsa "X_ICON" objesine tiklar
And Kullanici sayfanin yuklenmesini bekler
And Kullanici varsa "TUMUNU_REDDET" objesine tiklar
And Kullanici sayfanin yuklenmesini bekler
And Kullanici "ELEKTRONIK_KATEGORI" objesine tiklar
And Kullanici sayfanin yuklenmesini bekler
And Kullanici varsa "X_ICON_KATEGORI" objesine tiklar
And Kullanici sayfanin yuklenmesini bekler
And Kullanici "LAPTOP_TABLET_KATEGORI" objesine tiklar
And Kullanici sayfanin yuklenmesini bekler
And Kullanici "SORTING" objesine tiklar
And Kullanici "EN_YUKSEK_FIYAT" objesine tiklar
And Kullanici "3" saniye bekler
And Kullanici "URUN_ADI_ACIKLAMASI" ilk objesine tiklar
And Kullanici acilan yeni sekmeye odaklanir
And Kullanici varsa "KONUM_ANLADIM" objesine tiklar
And Kullanici "2" saniye bekler
And Kullanici "SEPETE_EKLE_BUTON" objesine tiklar
And Kullanici "3" saniye bekler
And Kullanici "trendyolURL2" adresiine gider
And Kullanici sayfanin yuklenmesini bekler
And Kullanici "URUN_ADI_ACIKLAMASI" ikinci objesine tiklar
And Kullanici acilan yeni sekmeye odaklanir
And Kullanici varsa "KONUM_ANLADIM" objesine tiklar
And Kullanici "2" saniye bekler
And Kullanici "SEPETE_EKLE_BUTON" objesine tiklar
And Kullanici "2" saniye bekler
And Kullanici "SEPETIM" objesine tiklar
And Kullanici "SEPETE_EN_SON_EKLENEN_URUN_SIL" ilk objesine tiklar
And Kullanici "BASARILI_SILME" objesinin degerinin "Sepet başarıyla güncellendi" oldugunu dogrular
And Kullanici "KARGO" objesinin degerinin "Kargo Bedava!" oldugunu dogrular
And Kullanici "2" saniye bekler
And Kullanici "SEPETTEKI_URUN_FIYATI" objesinin degerininin "SIPARIS_TOPLAM_TUTAR" objesinin degerine esit oldugunu dogrular
And Kullanici "SEPETI_ONAYLA" objesine tiklar
And Kullanici "UYE_OLMADAN_DEVAM_ET" objesine tiklar
And Kullanici "2" saniye bekler
When Kullanici "EMAIL_INPUT" objesini dummy email ile doldurur
And Kullanici "1" saniye bekler
When Kullanici "AD_INPUT" objesini dummy ad ile doldurur
And Kullanici "1" saniye bekler
When Kullanici "SOYAD_INPUT" objesini dummy soyad ile doldurur
And Kullanici "1" saniye bekler
When Kullanici "PHONE_INPUT" objesini dummy phone ile doldurur
And Kullanici "IL" objesine tiklar
And Kullanici "1" saniye bekler
When Kullanici "IL_OPTIONS" objesinden rasgele bir il secenege tiklar
And Kullanici "1" saniye bekler
And Kullanici "ILCE" objesine tiklar
And Kullanici "1" saniye bekler
When Kullanici "ILCE_OPTIONS" objesinden rasgele bir ilce secenege tiklar
And Kullanici "1" saniye bekler
And Kullanici "MAHALLE" objesine tiklar
And Kullanici "1" saniye bekler
When Kullanici "MAHALLE_OPTIONS" objesinden rasgele bir mahalle secenege tiklar
And Kullanici "1" saniye bekler
When Kullanici "ADDRESS_INPUT" objesini dummy adres ile doldurur
And Kullanici "1" saniye bekler
When Kullanici "ADDRESS_TITLE" objesini dummy adres basligi ile doldurur
And Kullanici "1" saniye bekler
And Kullanici "KAYDET_BUTTON" objesine tiklar
And Kullanici "1" saniye bekler
And Kullanici "EPOSTA_DOGRULAMA" objesinin degerinin "E-POSTA DOĞRULAMA" oldugunu dogrular
And Kullanici tarayiciyi kapatir