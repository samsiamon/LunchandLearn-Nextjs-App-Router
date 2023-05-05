'use client';

export default function ErrorPage({ params }: {params: Error}) {
    return(
        <div>
            <h2>{params.message}</h2>
        </div>
    )
}