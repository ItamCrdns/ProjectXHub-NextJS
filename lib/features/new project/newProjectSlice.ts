import { type NewProjectData } from '@/interfaces/NewProjectData'
import { type Employee } from '@/interfaces/employee'
import { type Option } from '@/interfaces/props/CustomSelectProps'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: NewProjectData = {
  name: '',
  description: '',
  companyId: 0,
  companyName: '',
  priority: 0,
  priorityLabel: '',
  employees: [],
  expectedDeliveryDate: '',
  startedWorking: true, // Default state value expects every project to start immediately
  clientName: ''
}

export const newProjectSlice = createSlice({
  name: 'newProjectData',
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<Option>) => {
      state.companyId = action.payload.value
      state.companyName = action.payload.label
    },
    clearCompanyValues: (state) => {
      state.companyId = initialState.companyId
      state.companyName = initialState.companyName
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setClientName: (state, action: PayloadAction<string>) => {
      state.clientName = action.payload
    },
    setExpectedDeliveryDate: (state, action: PayloadAction<string>) => {
      state.expectedDeliveryDate = action.payload
    },
    setStartedWorking: (state, action: PayloadAction<boolean>) => {
      state.startedWorking = action.payload
    },
    setPriority: (state, action: PayloadAction<Option>) => {
      state.priority = action.payload.value
      state.priorityLabel = action.payload.label
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    setEmployee: (state, action: PayloadAction<Employee>) => {
      const employees = state.employees

      if (employees !== null && employees?.some((x) => x.employeeId === action.payload.employeeId)) {
        state.employees = employees.filter((x) => x.employeeId !== action.payload.employeeId)
      } else {
        state.employees = [...(employees ?? []), action.payload]
      }
    },
    clear: () => initialState
  }
})

export default newProjectSlice.reducer

export const { setCompany, clearCompanyValues, setName, setClientName, setExpectedDeliveryDate, setStartedWorking, setPriority, setDescription, setEmployee, clear } = newProjectSlice.actions
