import React, { useEffect, useState } from 'react';

export default function Main({ component }) {

    const [Component, setComponent] = useState(<div>loading</div>)

    useEffect(() => {
        import(`./components/${component}.jsx`)
        .then((m) => {
            const Current = m.default;
            setComponent(<Current></Current>)
        })
        .catch((err) => {
            setComponent(<div>{err}</div>)
        })
    }, [])
    
	return <div>{Component}</div>;
}
