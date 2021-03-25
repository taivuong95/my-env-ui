import { memo } from "react";
export const KelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}


export const Celsius = memo(({ temp }) => {
    return temp.toFixed() + '℃';
});

export default {
    menuHeight: "64px",
    menuHeightSlim: "42px",
    systemColor: "#fff",
    xs: "599px",
    sm: "959px",
    md: "1279px",
    lg: "1699px"
    //ff: " \"Segoe UI Web (Cyrillic)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif"
}