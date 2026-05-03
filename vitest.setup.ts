import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock IntersectionObserver to trigger immediately with target
const IntersectionObserverMock = vi.fn((callback) => ({
  disconnect: vi.fn(),
  observe: vi.fn((target) => {
    // Trigger the callback with a mock entry that is intersecting and has the target
    callback([{ isIntersecting: true, intersectionRatio: 1, target }]);
  }),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
