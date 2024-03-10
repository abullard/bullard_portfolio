import * as React from 'react';

interface PdfViewerProps {
    path: string;
}

export const PdfViewer = (props: PdfViewerProps) => {
    const { path } = props;

    return (
        <iframe src={path} width={'100%'} height ={'1000px'} />);
};

