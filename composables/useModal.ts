export const useModal = (slider) => {
 
    const sliders = toValue( slider.map(res => {
        
        return res = {
            vision : res.valuePop,
            buttonName : res.button ,
            header: res.header,
            body: [{
                title : res.bodyTitle,
                text : res.bodyText,
            }],
            footersButton : res.footers.map(button => {
                return button
            })
        }
    }))
    let buttonNameShow = slider.map(res => {

        let name = res.button;
        let nameVision = res.valuePop;
        res =
            {
                nameButton: name,
                popVision : nameVision
            }
        
        return res;
    })
    return {
        sliders , buttonNameShow
    }
}