import React, { FC } from "react"
import ContentLoader from "react-content-loader"
import s from "./ProductSkeleton.module.scss"

const ProductSkeleton: FC = () => (
  <div className={s.skeleton}>
    <div className={s.content}>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 265 382"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        uniqueKey="products"
      >
        <circle cx="132" cy="101" r="101" />
        <rect x="0" y="219" rx="5" ry="5" width="265" height="25" />
        <rect x="0" y="257" rx="5" ry="5" width="265" height="68" />
        <rect x="0" y="342" rx="5" ry="5" width="95" height="40" />
        <rect x="129" y="342" rx="5" ry="5" width="136" height="40" />
      </ContentLoader>
    </div>
  </div>
)

export { ProductSkeleton }
