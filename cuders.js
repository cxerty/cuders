// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://derskayit.cu.edu.tr/DerseYazilma
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.tr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


setTimeout(doSomething, 500);

function doSomething() {
    const OnaylaButton=document.querySelector("#ContentPlaceHolderOrtaAlan_ContentPlaceHolderIcerik_UC_YazilmaAciklama_btnOnayla");
    if(OnaylaButton !=null){
    OnaylaButton.click();
    }
    else{
    const Kaydet=document.querySelector("#ContentPlaceHolderOrtaAlan_ContentPlaceHolderIcerik_UC_DersSec_btnKaydet")
const IndustrialButton=document.querySelector("#ContentPlaceHolderOrtaAlan_ContentPlaceHolderIcerik_UC_DersSec_chk_36056")
const RenewButton=document.querySelector("#ContentPlaceHolderOrtaAlan_ContentPlaceHolderIcerik_UC_DersSec_chk_36057")
    const selectElement =
          document.querySelector("#ContentPlaceHolderOrtaAlan_ContentPlaceHolderIcerik_UC_DersSec_pnlSecim > div:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(12) > td:nth-child(3) > span.badge.badge-info")
    if(selectElement.firstChild.data!="Kalan: 0" && IndustrialButton.checked==1)
    { IndustrialButton.click();
      RenewButton.click();
      Kaydet.click();
     clearTimeout(doSomething);
    }
    else if(IndustrialButton.checked==1){
        history.go();
    }
    else{
    history.go();
    }
}}
})();
