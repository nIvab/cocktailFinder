function imperialToMetric(measure) {
    if (measure === null) {
        return " ";
    } else {
        let n = measure.length;
        if (measure[(n - 2, n)] === "oz") {
            measure.replace("oz", "");
            measure = measure * 29.5735;
            return `${measure} ml`;
        } else {
            return measure;
        }
    }
}

export default imperialToMetric;
