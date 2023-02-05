
setTimeout(doSomething, 1000);

function doSomething() {
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
}
