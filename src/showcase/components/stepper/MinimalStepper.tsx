'use client'

import React, { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, Circle } from 'lucide-react'

interface Field {
    name: string
    type: string
    placeholder: string
}

interface Step {
    label: string
    fields?: Field[]
}

const steps: Step[] = [
    { label: 'Introduction' },
    {
        label: 'Personal Information',
        fields: [
            { name: 'name', type: 'text', placeholder: 'Name' },
            { name: 'email', type: 'email', placeholder: 'Email' },
        ],
    },
    {
        label: 'Address Details',
        fields: [
            { name: 'address', type: 'text', placeholder: 'Address' },
            { name: 'city', type: 'text', placeholder: 'City' },
            { name: 'country', type: 'text', placeholder: 'Country' },
        ],
    },
    { label: 'Review & Submit' },
]

const Stepper: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleNext = useCallback(() => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }, [])

    const handlePrev = useCallback(() => {
        setCurrentStep((prev) => Math.max(prev - 1, 0))
    }, [])

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }, [])

    const handleSubmit = useCallback(() => {
        console.log('Form Submitted:', formData)
        setIsSubmitted(true)
    }, [formData])

    if (isSubmitted) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-semibold">
                    Thank you for your submission!
                </h2>
            </div>
        )
    }

    return (
        <div className="mx-auto w-full max-w-xl p-6">
            <StepIndicator currentStep={currentStep} steps={steps} />
            <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -0, opacity: 0 }}
                >
                    <StepContent
                        currentStep={currentStep}
                        formData={formData}
                        handleChange={handleChange}
                    />
                </motion.div>
            </AnimatePresence>
            <NavigationButtons
                currentStep={currentStep}
                totalSteps={steps.length}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

const StepIndicator: React.FC<{ currentStep: number; steps: Step[] }> = ({
    currentStep,
    steps,
}) => (
    <div className="flex justify-between">
        {steps.map((step, index) => (
            <div key={step.label} className="flex flex-col items-center">
                <motion.div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${index <= currentStep ? 'bg-red-500/15 text-red-500' : 'bg-secondary'
                        }`}
                    initial={false}
                    animate={{ scale: index === currentStep ? 1.2 : 1 }}
                >
                    {index <= currentStep ? (
                        <CheckCircle size={20} />
                    ) : (
                        <Circle size={20} />
                    )}
                </motion.div>
                <div className="mt-2 text-sm">{step.label}</div>
            </div>
        ))}
    </div>
)

const ProgressBar: React.FC<{ currentStep: number; totalSteps: number }> = ({
    currentStep,
    totalSteps,
}) => (
    <motion.div
        className="mt-4 h-2 rounded-full bg-red-500"
        initial={{ width: '0%' }}
        animate={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
    />
)

const StepContent: React.FC<{
    currentStep: number
    formData: Record<string, string>
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ currentStep, formData, handleChange }) => {
    if (currentStep === 0) {
        return (
            <div className="text-left">
                <h2 className="mb-4 text-lg font-semibold">Introduction</h2>
                <p>Welcome to the form! Click next to proceed.</p>
            </div>
        )
    }

    if (currentStep === steps.length - 1) {
        return (
            <div>
                <h2 className="mb-4 text-lg font-semibold">Review & Submit</h2>
                {Object.entries(formData).map(([key, value]) => (
                    <p className='' key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                        {value}
                    </p>
                ))}
            </div>
        )
    }

    const fields = steps[currentStep].fields!
    return (
        <div>
            <h3 className="mb-4 text-lg font-semibold">{steps[currentStep].label}</h3>
            {fields.map((field, index) => (
                <div key={field.name}>
                    <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="bg-background mb-4 w-full rounded-2xl border px-4 py-1 outline-none dark:border-0"
                        required
                    />
                </div>
            ))}
        </div>
    )
}

const NavigationButtons: React.FC<{
    currentStep: number
    totalSteps: number
    handlePrev: () => void
    handleNext: () => void
    handleSubmit: () => void
}> = ({ currentStep, totalSteps, handlePrev, handleNext, handleSubmit }) => (
    <div className="flex justify-between">
        <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="rounded-2xl bg-red-500 px-6 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
            Previous
        </button>
        {currentStep === totalSteps - 1 ? (
            <button
                onClick={handleSubmit}
                className="rounded-2xl bg-red-500 px-6 py-1 text-sm font-medium text-white"
            >
                Submit
            </button>
        ) : (
            <button
                onClick={handleNext}
                className="rounded-2xl bg-red-500 px-6 py-1 text-sm font-medium text-white"
            >
                Next
            </button>
        )}
    </div>
)

export default Stepper
