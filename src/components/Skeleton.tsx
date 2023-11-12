import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
    <ContentLoader
        speed={20}
        width={420}
        height={540}
        viewBox='0 0 420 540'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <rect x='23' y='476' rx='3' ry='3' width='350' height='45' />
        <rect x='20' y='410' rx='3' ry='3' width='350' height='45' />
        <rect x='20' y='40' rx='0' ry='0' width='350' height='350' />
    </ContentLoader>
);
