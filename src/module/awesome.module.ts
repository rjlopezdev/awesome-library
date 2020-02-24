import { Module, DynamicModule } from '@nestjs/common';
import { AwesomeConfig, MODULE_CONFIG, DEFAULT_MODULE_CONFIG } from './config';
import { AwesomeService } from './awesome.service';

/**
 * LibraryName description
 */
@Module({})
export class AwesomeModule {

  /**
   * Register the module
   * @param config configuration for module
   */
  static register(config: AwesomeConfig): DynamicModule {
    return {
      module: AwesomeModule,
      providers: [
        {
          provide: MODULE_CONFIG,
          useValue: config || DEFAULT_MODULE_CONFIG
        },
        AwesomeService
      ],
      exports: [
        AwesomeService
      ]
    }
  }

}
