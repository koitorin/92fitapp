import { Injectable } from '@nestjs/common';

@Injectable()
export class MotionService {
  async processMotion(motionData: any): Promise<string> {
    // Aqui você pode integrar com MediaPipe para análise dos dados
    // ou outras lógicas de processamento de movimento

    // Exemplo: análise básica de movimentos
    const { keypoints } = motionData;
    if (keypoints) {
      // Processar keypoints e retornar análise
      return 'Movimento processado com sucesso';
    }
    return 'Dados insuficientes para análise';
  }
}