import React from 'react'
import { Button, Card, CardContent, Grid,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Box, InputLabel, FormLabel, FormControl, Select, MenuItem } from '@mui/material'
import {useContext, useEffect, useState} from 'react'
import { DatosContext } from "../../Context/datosContext"
import Layout from '../../components/layout/Layout'
import { lineHeight } from '@mui/system'

const informeExtranjeros = () => {
  return (
    <Layout>informe-extranjeros</Layout>
  )
}

export default informeExtranjeros