import { API_ENDPOINTS, isValidRegionType, isValidRegionId } from '../config/api.config';
import { apiService } from './apiService';
import { AgeDistributionData } from '../components/AgeDistributionChart';
import { EthnicityDistributionData } from '../components/EthnicityDistributionChart';
import { GenderDistributionData } from '../components/GenderDistributionChart';
import { MaritalStatusDistributionData } from '../components/MaritalStatusDistributionChart';
import { ReligiousAffiliationDistributionData } from '../components/ReligiousAffiliationDistributionChart';

export interface PopulationData {
  region: string;
  total_population: number;
  year: number;
}

export class DataService {
  static async fetchRegionData<T>(
    category: keyof typeof API_ENDPOINTS,
    type: string,
  ): Promise<T> {
    if (!isValidRegionType(type)) {
      throw new Error(`Invalid region type: ${type}`);
    }
    
    const endpoint = API_ENDPOINTS[category].byType(type);
    return apiService.get<T>(endpoint);
  }
  
  static async fetchRegionDataById<T>(
    category: keyof typeof API_ENDPOINTS,
    id: string,
  ): Promise<T> {
    if (!isValidRegionId(id)) {
      throw new Error(`Invalid region ID: ${id}`);
    }
    
    const endpoint = API_ENDPOINTS[category].byId(id);
    return apiService.get<T>(endpoint);
  }

  static async fetchPopulationById(regionId: string): Promise<PopulationData[]> {
    if (!isValidRegionId(regionId)) {
      throw new Error(`Invalid region ID: ${regionId}`);
    }
    
    const endpoint = API_ENDPOINTS.population.byId(regionId);
    return apiService.get<PopulationData[]>(endpoint);
  }

  static async fetchAgeDistributionById(regionId: string): Promise<AgeDistributionData> {
    if (!isValidRegionId(regionId)) {
      throw new Error(`Invalid region ID: ${regionId}`);
    }
    
    const endpoint = API_ENDPOINTS.ageDistribution.byId(regionId);
    return apiService.get<AgeDistributionData>(endpoint);
  }

  static async fetchEthnicityDistributionById(regionId: string): Promise<EthnicityDistributionData> {
    if (!isValidRegionId(regionId)) {
      throw new Error(`Invalid region ID: ${regionId}`);
    }
    
    const endpoint = API_ENDPOINTS.ethnicityDistribution.byId(regionId);
    return apiService.get<EthnicityDistributionData>(endpoint);
  }

  static async fetchGenderDistributionById(regionId: string): Promise<GenderDistributionData> {
    if (!isValidRegionId(regionId)) {
      throw new Error(`Invalid region ID: ${regionId}`);
    }
    
    const endpoint = API_ENDPOINTS.genderDistribution.byId(regionId);
    return apiService.get<GenderDistributionData>(endpoint);
  }

  static async fetchMaritalStatusDistributionById(regionId: string): Promise<MaritalStatusDistributionData> {
    if (!isValidRegionId(regionId)) {
      throw new Error(`Invalid region ID: ${regionId}`);
    }
    
    const endpoint = API_ENDPOINTS.maritalStatus.byId(regionId);
    return apiService.get<MaritalStatusDistributionData>(endpoint);
  }

  static async fetchReligiousAffiliationDistributionById(regionId: string): Promise<ReligiousAffiliationDistributionData> {
    if (!isValidRegionId(regionId)) {
      throw new Error(`Invalid region ID: ${regionId}`);
    }
    
    const endpoint = API_ENDPOINTS.religiousAffiliation.byId(regionId);
    return apiService.get<ReligiousAffiliationDistributionData>(endpoint);
  }
}   
