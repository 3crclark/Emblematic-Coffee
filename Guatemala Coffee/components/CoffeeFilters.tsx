'use client'

import { useState } from 'react'

type FilterType = 'all' | 'premium' | 'microlot'

interface CoffeeFiltersProps {
  activeFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

export function CoffeeFilters({ activeFilter, onFilterChange }: CoffeeFiltersProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'premium', label: 'Premium' },
    { value: 'microlot', label: 'Microlot' },
  ]

  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-sm font-medium text-coffee-700">Filter:</span>
      <div className="flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === filter.value
                ? 'bg-coffee-900 text-white shadow-sm'
                : 'bg-white/60 backdrop-blur-sm border border-coffee-200 text-coffee-700 hover:bg-coffee-50 hover:border-coffee-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

