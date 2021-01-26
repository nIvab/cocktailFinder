import React, { useState } from "react";

import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const SearchBar = () => {
    let initial = [];
    const [tags, setTags] = useState(initial);

    return <TagsInput value={tags} onChange={setTags} />;
};
export default SearchBar;
