import { ReactElement, useState } from 'react';
export function useMultiStepForm(steps: ReactElement[]) {
	const [currentStepIndex, setCurrentStepIndex] = useState(1)

	function next() {
		setCurrentStepIndex(i => {
			if (i > steps.length -1) return i
			return i + 1
		})
	}

	function back() {
		setCurrentStepIndex(i => {
			if(i <= 0) return i 
				return i - i
		})
	}

	function goTo(index: number) {
		setCurrentStepIndex(index)
	}

	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		goTo,
		next,
		steps,
		back
	}
}