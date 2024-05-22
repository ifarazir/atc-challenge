import Container from "./container";

export default async function Page({ params }: { params: { id: string } }) {
    return (
        <div>
            <Container />
        </div>
    );

}