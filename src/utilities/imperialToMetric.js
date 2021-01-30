function imperialToMetric(measure) {
    if (measure === null) {
        return " ";
    } else {
        measure = measure.toLowerCase();
        if (measure.includes("oz")) {
            measure.replace("oz", "");
            measure = parseInt(measure);
            measure = Math.floor(measure * 29.5735);
            return `${measure} ml`;
        } else if (measure.includes("cl")) {
            // not imperial but I dont like this unit
            measure.replace("cl", "");
            measure = parseInt(measure);
            measure = measure * 10;
            return `${measure} ml`;
        } else if (measure.includes("qt")) {
            measure.replace("qt", "");
            measure = parseInt(measure);
            measure = Math.floor(measure * 0.95);
            return `${measure} L`;
        } else {
            return measure;
        }
    }
}

export default imperialToMetric;
