import React from "react"
import ContentLoader from "react-content-loader"

export const Loader = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="136" cy="142" r="118" />
        <rect x="1" y="274" rx="5" ry="5" width="280" height="25" />
        <rect x="0" y="310" rx="10" ry="10" width="278" height="87" />
        <rect x="2" y="415" rx="0" ry="0" width="79" height="31" />
        <rect x="120" y="408" rx="27" ry="27" width="160" height="40" />
    </ContentLoader>
)

