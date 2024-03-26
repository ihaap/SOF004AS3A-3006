import Stack from '@mui/material/Stack';


function Home() {
    return (
        <>
            <Stack direction="row" mt={4} spacing={2} justifyContent="center" alignItems="center">
                <p>Tervetuloa etusivulle!</p>
            </Stack>

            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
            </div>
        </>
    )
}

export default Home;