import React, { useState, useEffect } from 'react';
import { Heart, Search, Filter, MapPin, ChevronDown, ChevronUp, Star } from 'lucide-react';

// Mock pet data (you would typically fetch this from an API)
const initialPets = [
  {
    id: 1,
    name: 'Buddy',
    type: 'Dog',
    breed: 'Labrador',
    age: 'Adult',
    size: 'Large',
    gender: 'Male',
    temperament: 'Friendly',
    healthStatus: 'Vaccinated, Neutered',
    coatType: 'Short hair',
    color: 'Golden',
    location: 'New York',
    price: 500,
    rating: 4,
    image: '/api/placeholder/300/300',
    description: 'Friendly Labrador looking for a loving home. Great with kids and other pets!'
  },
  // ... (previous pet data remains the same)
];

const PetAdoptionApp = () => {
  const [pets, setPets] = useState(initialPets);
  const [filters, setFilters] = useState({
    discount: [],
    rating: 0,
    priceRange: [0, 1000],
    languages: [],
    type: [],
    age: [],
    size: [],
    gender: [],
    temperament: []
  });
  const [openSections, setOpenSections] = useState({
    discount: true,
    rating: true,
    price: true,
    languages: false,
    type: true,
    age: false,
    size: false,
    gender: false,
    temperament: false
  });
  const [selectedPet, setSelectedPet] = useState(null);

  // Advanced filter logic
  useEffect(() => {
    const filteredPets = initialPets.filter(pet => {
      // Discount filter (placeholder logic)
      const discountMatch = filters.discount.length === 0 || 
        filters.discount.some(d => calculateDiscount(pet.price) >= parseInt(d));

      // Rating filter
      const ratingMatch = filters.rating === 0 || pet.rating >= filters.rating;

      // Price range filter
      const priceMatch = pet.price >= filters.priceRange[0] && 
        pet.price <= filters.priceRange[1];

      // Other filters
      const typeMatch = filters.type.length === 0 || filters.type.includes(pet.type);
      const ageMatch = filters.age.length === 0 || filters.age.includes(pet.age);
      const sizeMatch = filters.size.length === 0 || filters.size.includes(pet.size);
      const genderMatch = filters.gender.length === 0 || filters.gender.includes(pet.gender);
      const temperamentMatch = filters.temperament.length === 0 || 
        filters.temperament.includes(pet.temperament);

      return discountMatch && ratingMatch && priceMatch && 
        typeMatch && ageMatch && sizeMatch && 
        genderMatch && temperamentMatch;
    });

    setPets(filteredPets);
  }, [filters]);

  // Helper function to calculate discount (placeholder)
  const calculateDiscount = (price) => {
    // Example discount calculation
    return price < 300 ? 70 : price < 500 ? 50 : price < 700 ? 35 : 10;
  };

  // Toggle filter section
  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle checkbox filter
  const handleCheckboxFilter = (filterType, value) => {
    setFilters(prev => {
      const currentFilter = prev[filterType];
      const newFilter = currentFilter.includes(value)
        ? currentFilter.filter(item => item !== value)
        : [...currentFilter, value];
      return { ...prev, [filterType]: newFilter };
    });
  };

  // Handle price range
  const handlePriceChange = (event) => {
    const value = parseInt(event.target.value);
    setFilters(prev => ({
      ...prev,
      priceRange: [0, value]
    }));
  };

  // Handle rating filter
  const handleRatingFilter = (rating) => {
    setFilters(prev => ({
      ...prev,
      rating
    }));
  };

  // Rest of the component remains the same as in the previous version
  // ... (openPetDetails, closePetDetails, and other methods)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex">
      {/* Sidebar Filters */}
      <div className="w-1/4 p-6 bg-gray-800 shadow-xl border-r border-red-900 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-red-500">
          <Filter className="mr-2" /> Filters
        </h2>

        {/* Discount Filter */}
        <FilterSection 
          title="Discount" 
          isOpen={openSections.discount}
          toggleSection={() => toggleSection('discount')}
        >
          {['10%', '25%', '35%', '50%', '60%', '70%'].map(discount => (
            <CheckboxFilter 
              key={discount}
              label={`${discount} Off or more`}
              checked={filters.discount.includes(discount.replace('%', ''))}
              onChange={() => handleCheckboxFilter('discount', discount.replace('%', ''))}
            />
          ))}
        </FilterSection>

        {/* Rating Filter */}
        <FilterSection 
          title="Customer Review" 
          isOpen={openSections.rating}
          toggleSection={() => toggleSection('rating')}
        >
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map(star => (
              <Star 
                key={star}
                className={`cursor-pointer ${
                  filters.rating <= star 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-400'
                }`}
                onClick={() => handleRatingFilter(star)}
              />
            ))}
            <span className="ml-2 text-gray-400">& Up</span>
          </div>
        </FilterSection>

        {/* Price Range Filter */}
        <FilterSection 
          title="Price" 
          isOpen={openSections.price}
          toggleSection={() => toggleSection('price')}
        >
          <div className="flex items-center space-x-4">
            <span>₹0</span>
            <input 
              type="range" 
              min="0" 
              max="1000" 
              value={filters.priceRange[1]}
              onChange={handlePriceChange}
              className="w-full"
            />
            <span>₹{filters.priceRange[1]}</span>
          </div>
        </FilterSection>

        {/* Other Filters (Type, Age, etc.) */}
        {[
          { name: 'type', options: ['Dog', 'Cat', 'Rabbit', 'Bird'] },
          { name: 'age', options: ['Puppy', 'Adult', 'Senior'] },
          { name: 'size', options: ['Small', 'Medium', 'Large'] },
          { name: 'gender', options: ['Male', 'Female'] },
          { name: 'temperament', options: ['Friendly', 'Playful', 'Calm'] }
        ].map(filterGroup => (
          <FilterSection 
            key={filterGroup.name}
            title={filterGroup.name.charAt(0).toUpperCase() + filterGroup.name.slice(1)}
            isOpen={openSections[filterGroup.name]}
            toggleSection={() => toggleSection(filterGroup.name)}
          >
            {filterGroup.options.map(option => (
              <CheckboxFilter 
                key={option}
                label={option}
                checked={filters[filterGroup.name].includes(option)}
                onChange={() => handleCheckboxFilter(filterGroup.name, option)}
              />
            ))}
          </FilterSection>
        ))}
      </div>

      {/* Rest of the component remains the same */}
      {/* ... Pet Cards Section and Pet Details Modal */}
    </div>
  );
};

// Reusable Filter Section Component
const FilterSection = ({ title, children, isOpen, toggleSection }) => (
  <div className="mb-4 border-b border-gray-700 pb-4">
    <div 
      className="flex justify-between items-center cursor-pointer"
      onClick={toggleSection}
    >
      <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
    </div>
    {isOpen && <div className="mt-2 space-y-2">{children}</div>}
  </div>
);

// Reusable Checkbox Filter Component
const CheckboxFilter = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-2 text-gray-300 hover:text-white">
    <input 
      type="checkbox" 
      checked={checked}
      onChange={onChange}
      className="form-checkbox text-red-600 bg-gray-700 border-gray-600"
    />
    <span>{label}</span>
  </label>
);

export default PetAdoptionApp;