import { Layout } from '@/components/layouts'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <>
      <Layout title='Home - OpenJira'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='Pendientes' />
              <CardContent>
                {/* Agregar una nueva entrada */}
                {/* Listado de las entradas */}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='En progreso' />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='Completadas' />
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}
