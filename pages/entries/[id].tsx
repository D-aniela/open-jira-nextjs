import { ChangeEvent, useMemo, useState } from 'react'
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
} from '@mui/material'
import { Layout } from '@/components/layouts'
import { EntryStatus } from '@/interfaces'
import { DeleteOutline, SaveOutlined } from '@mui/icons-material'

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished']

const EntryPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState<EntryStatus>('pending')
  const [touched, setTouched] = useState(false)

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched],
  )

  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus)
  }

  const onSave = () => {
    setTouched(true)
    if (!inputValue) return
    console.log('Saving entry...')
  }

  return (
    <Layout title='... ...'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <CardHeader
            title={`Entrada: ${inputValue}`}
            subheader={`Creada hace`}
          />
          <CardContent>
            <TextField
              sx={{ marginTop: 2, marginBottom: 1 }}
              fullWidth
              placeholder='Nueva entrada'
              autoFocus
              multiline
              label='Nueva entrada'
              value={inputValue}
              onBlur={() => setTouched(true)}
              onChange={onInputValueChanged}
              helperText={isNotValid && 'Ingrese un valor'}
              error={isNotValid}
            />
            <FormControl>
              <FormLabel>Estado:</FormLabel>
              <RadioGroup row value={status} onChange={onStatusChanged}>
                {validStatus.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio color='primary' />}
                    label={capitalize(option)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button
              startIcon={<SaveOutlined />}
              variant='contained'
              fullWidth
              onClick={onSave}
              disabled={inputValue.length <= 0}
            >
              Save
            </Button>
          </CardActions>
        </Grid>
        <IconButton
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            backgroundColor: 'error.dark',
          }}
        >
          <DeleteOutline />
        </IconButton>
      </Grid>
    </Layout>
  )
}

export default EntryPage