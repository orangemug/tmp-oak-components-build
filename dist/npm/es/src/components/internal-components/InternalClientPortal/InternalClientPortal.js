import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

var InternalClientPortal = function (_a) {
    var children = _a.children, show = _a.show;
    var ref = useRef(null);
    useEffect(function () {
        ref.current = document.body;
    }, []);
    return show && ref.current ? createPortal(children, ref.current) : null;
};

export { InternalClientPortal };
