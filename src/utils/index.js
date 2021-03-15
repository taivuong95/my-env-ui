export const KelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`); 
 }